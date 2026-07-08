'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import ProgressBar from '@/components/form/ProgressBar'
import PropertyTypeSelector from '@/components/form/PropertyTypeSelector'
import FormStep2_Property from '@/components/form/FormStep2_Property'
import FormStep3_Parties from '@/components/form/FormStep3_Parties'
import FormStep4_Terms from '@/components/form/FormStep4_Terms'
import FormStep5_Clauses from '@/components/form/FormStep5_Clauses'
import { TenancyFormData, PropertyType, defaultFormData } from '@/lib/types'
import StepZero from '@/components/form/StepZero'

export default function HomeForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<TenancyFormData>(defaultFormData)
  const [restored, setRestored] = useState(false)

  useEffect(() => {
    try {
      // Try sessionStorage first, fall back to localStorage
      const savedForm = sessionStorage.getItem('phlease_form') || localStorage.getItem('phlease_form')
      const savedStep = sessionStorage.getItem('phlease_step') || localStorage.getItem('phlease_step')
      if (savedForm) setFormData(JSON.parse(savedForm))
      if (savedStep) setStep(Number(savedStep))
      else setStep(1)
    } catch { /* ignore */ }
    setRestored(true)
  }, [])

  const persistTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (!restored) return
    if (persistTimer.current) clearTimeout(persistTimer.current)
    persistTimer.current = setTimeout(() => {
      const serialised = JSON.stringify(formData)
      sessionStorage.setItem('phlease_form', serialised)
      localStorage.setItem('phlease_form', serialised)
    }, 400)
    return () => { if (persistTimer.current) clearTimeout(persistTimer.current) }
  }, [formData, restored])

  useEffect(() => {
    if (!restored) return
    sessionStorage.setItem('phlease_step', String(step))
    localStorage.setItem('phlease_step', String(step))
  }, [step, restored])

  const updateForm = (updates: Partial<TenancyFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const goToStep = (n: number) => {
    setStep(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSamplePreview = () => {
    const today = new Date()
    const expiry = new Date(today)
    expiry.setDate(expiry.getDate() + 365)
    const toYMD = (d: Date) => d.toISOString().split('T')[0]

    const sampleFormData: TenancyFormData = {
      ...defaultFormData,
      propertyType: 'residential',
      propertyAddress: '123 Rizal Avenue, Barangay San Lorenzo',
      unitNumber: 'Unit 8C',
      postalCode: '120123',
      landlordName: 'Juan dela Cruz',
      landlordNric: '1234',
      tenantName: 'Maria Santos',
      tenantNric: '1234',
      commencementDate: toYMD(today),
      expiryDate: toYMD(expiry),
      monthlyRent: 25000,
      securityDeposit: 50000,
      rentPaymentDay: 1,
      paymentBank: 'BDO',
      paymentAccountName: 'Juan dela Cruz',
      paymentAccountNo: '123-456789-0',
    }

    const serialised = JSON.stringify(sampleFormData)
    sessionStorage.setItem('phlease_form', serialised)
    localStorage.setItem('phlease_form', serialised)
    sessionStorage.setItem('phlease_is_sample', 'true')
    router.push('/preview')
  }

  const handlePreview = () => {
    sessionStorage.removeItem('phlease_is_sample')
    const serialised = JSON.stringify(formData)
    sessionStorage.setItem('phlease_form', serialised)
    localStorage.setItem('phlease_form', serialised)
    router.push('/preview')
  }

  const handleReset = () => {
    sessionStorage.removeItem('phlease_form')
    sessionStorage.removeItem('phlease_step')
    sessionStorage.removeItem('phlease_is_sample')
    localStorage.removeItem('phlease_form')
    localStorage.removeItem('phlease_step')
    setFormData(defaultFormData)
    setStep(1)
  }

  // SSR fallback: render Header + hero (real <h1> + intro) + Footer so crawlers
  // get a server-rendered content heading. Only the interactive form is gated.
  if (!restored) return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1 container-narrow py-8">
        <section className="mb-6 rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-8 shadow-card">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge-brand">Philippines-focused</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-navy-900 tracking-tight text-balance mb-3">
            Tenancy agreement done right, in minutes.
          </h1>
          <p className="text-navy-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Generate a Philippines residential tenancy agreement for residential, private property, or room rental — or renew an existing one in 2 minutes. Preview free, download from <span className="font-semibold text-brand-700">PHP ₱500</span>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className={`flex-1 container-narrow ${step === 0 ? 'flex flex-col justify-center py-6' : 'py-8'}`}>
        {/* Hero card, shown at entry */}
        {step <= 1 && (
          <section className="mb-6 rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-8 shadow-card animate-fade-in">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge-brand">Philippines-focused</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-navy-900 tracking-tight text-balance mb-3">
              Tenancy agreement done right, in minutes.
            </h1>

            <p className="text-navy-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
              Generate a Philippines residential tenancy agreement for residential, private property, or room rental — or renew an existing one in 2 minutes.
              Preview free, download from <span className="font-semibold text-brand-700">PHP ₱500</span>.
            </p>

            {/* Two-lane CTA: NEW vs RENEW — equal weight per data showing
                renewal converts better (64% landing→form vs 45%). */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <button
                onClick={() => step === 0 ? goToStep(1) : window.scrollTo({ top: 280, behavior: 'smooth' })}
                className="group rounded-2xl border-2 border-brand-600 bg-brand-600 hover:bg-brand-700 text-white text-left p-5 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-lg font-bold">New tenancy</span>
                  <span className="text-sm opacity-80">~5 min</span>
                </div>
                <p className="text-sm opacity-90 mb-2">Generate a fresh agreement for residential, private, or room rental.</p>
                <span className="text-sm font-semibold underline-offset-2 group-hover:underline">Start agreement →</span>
              </button>

              <a
                href="/renew"
                className="group rounded-2xl border-2 border-brand-600 bg-white hover:bg-brand-50 text-brand-700 text-left p-5 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-lg font-bold">Renewing?</span>
                  <span className="text-sm opacity-80">~2 min</span>
                </div>
                <p className="text-sm text-navy-600 mb-2">Update an existing tenancy with new dates and rent.</p>
                <span className="text-sm font-semibold underline-offset-2 group-hover:underline">Renew agreement →</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button onClick={handleSamplePreview} className="btn-secondary">
                See sample contract first
              </button>
              <span className="text-xs text-navy-500">No signup. Pay only when you download.</span>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-navy-600">
                <span className="font-semibold text-navy-900">residential / Private / Room</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-navy-600">
                <span className="font-semibold text-navy-900">BIR stamp duty ready</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-navy-600">
                <span className="font-semibold text-navy-900">PayNow / GrabPay / Card</span>
              </div>
            </div>
          </section>
        )}

        <div className="card p-6 sm:p-8 animate-slide-up">
          {/* Progress bar, steps 1-5 */}
          {step >= 1 && (
            <div className="mb-2">
              <ProgressBar currentStep={step} />
            </div>
          )}

          {/* Step jump bar, step 2+ */}
          {step > 1 && (
            <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-slate-100">
              {[
                { n: 0, label: 'Start' },
                { n: 1, label: 'Property Type' },
                { n: 2, label: 'Property' },
                { n: 3, label: 'Parties' },
                { n: 4, label: 'Terms' },
                { n: 5, label: 'Clauses' },
              ].map(({ n, label }) => (
                <button
                  key={n}
                  onClick={() => goToStep(n)}
                  aria-label={n < step ? `Go back to ${label} (complete)` : `Go to ${label}`}
                  aria-current={step === n ? 'step' : undefined}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-[background-color,border-color,color] font-medium
                    ${step === n
                      ? 'bg-brand-600 text-white border-brand-600'
                      : n < step
                        ? 'bg-brand-50 text-brand-700 border-brand-200 hover:bg-brand-100'
                        : 'bg-white text-navy-400 border-slate-200 hover:border-slate-300'
                    }`}
                >
                  {n < step ? '✓ ' : ''}{label}
                </button>
              ))}
              <button
                onClick={handleReset}
                className="text-xs px-3 py-1.5 rounded-full border border-red-200 text-red-400 hover:bg-red-50 hover:text-red-600 transition-[background-color,color] ml-auto font-medium"
              >
                Start over
              </button>
            </div>
          )}

          {step === 0 && <StepZero onNewTA={() => goToStep(1)} />}
          {step === 1 && (
            <PropertyTypeSelector
              value={formData.propertyType}
              onChange={(v: PropertyType) => updateForm({ propertyType: v })}
              onContinue={() => goToStep(2)}
              onBack={() => goToStep(0)}
            />
          )}
          {step === 2 && (
            <FormStep2_Property formData={formData} onChange={updateForm} onNext={() => goToStep(3)} onBack={() => goToStep(1)} />
          )}
          {step === 3 && (
            <FormStep3_Parties formData={formData} onChange={updateForm} onNext={() => goToStep(4)} onBack={() => goToStep(2)} />
          )}
          {step === 4 && (
            <FormStep4_Terms formData={formData} onChange={updateForm} onNext={() => goToStep(5)} onBack={() => goToStep(3)} />
          )}
          {step === 5 && (
            <FormStep5_Clauses formData={formData} onChange={updateForm} onPreview={handlePreview} onBack={() => goToStep(4)} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
