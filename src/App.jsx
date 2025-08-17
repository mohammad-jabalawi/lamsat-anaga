import React, { useState } from 'react'
import { Phone, Mail, MapPin, Scissors, Wind, Sparkles, Layers, Palette, Gem, CheckCircle2, Instagram, Facebook, MessageCircle, Globe, Menu } from 'lucide-react'
import { motion } from 'framer-motion'
export default function App() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'قص الشعر', message: '' })
  const mapsUrl = 'https://maps.app.goo.gl/your-place-link'
  const whatsapp = '966500000000'
  const gallery = [
     'puplic/projects/offerForMarej.png',
    'https://images.unsplash.com/photo-1545116178-4e7f0ae72b41?q=80&w=1200&auto=format&fit=crop',
     'https://images.unsplash.com/photo-1545116178-4e7f0ae72b41?q=80&w=1200&auto=format&fit=crop'
  ]
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const txt = encodeURIComponent(`حجز موعد - لمسة أناقة\n\nالاسم: ${form.name}\nالجوال: ${form.phone}\nالخدمة: ${form.service}\nالرسالة: ${form.message}`)
    window.open(`https://wa.me/${whatsapp}?text=${txt}`, '_blank')
  }
    const services = [
        { icon: <Scissors className="w-10 h-10 text-brand-pink" />, title: 'قص الشعر', price: '120 ريال', desc: 'قص احترافي يناسب ملامحك وشكلك.', notes: ['استشارة قبل القص', 'غسيل وتجفيف خفيف'] },
        { icon: <Wind className="w-10 h-10 text-brand-pink" />, title: 'استشوار', price: '80 ريال', desc: 'تصفيف ولمسات نهائية تدوم أطول.', notes: ['حماية حرارية', 'فرش ولمسة نهائية'] },
        { icon: <Sparkles className="w-10 h-10 text-brand-pink" />, title: 'مكياج', price: '250 ريال', desc: 'إطلالات يومية وسهرات مع خامات فاخرة.', notes: ['رموش اختيارية', 'تثبيت طويل'] },
        { icon: <Gem className="w-10 h-10 text-brand-pink" />, title: 'العناية بالأظافر', price: '90 ريال', desc: 'تنظيف وتجميل بأدوات معقمة ولمسة راقية.', notes: ['تعقيم كامل', 'تشكيل ولمعان'] },
        { icon: <Layers className="w-10 h-10 text-brand-pink" />, title: 'وصلات الشعر', price: 'ابتداءً من 400 ريال', desc: 'تركيب احترافي ومظهر طبيعي.', notes: ['مطابقة لون', 'تركيب غير مرئي'] },
        { icon: <Palette className="w-10 h-10 text-brand-pink" />, title: 'صبغة الشعر', price: 'ابتداءً من 300 ريال', desc: 'ألوان عصرية مع حماية ولمعان.', notes: ['اختبار خصلة', 'حماية ولمعان'] },

  ]
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const stagger = { show: { transition: { staggerChildren: 0.12 } } }
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)
  const [mobileOpen, setMobileOpen] = useState(false)

    return (
    <div dir="rtl" className="font-sans text-brand-ink bg-brand-light">

        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-brand-blush/60 safe-top">
            <div className="container-lg flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                    <img src="" alt="شعار لمسة أناقة" className="w-10 h-10" />
                    <div className="font-extrabold text-brand-pink text-xl">لمسة أناقة</div>
                </div>

                {/* أزرار الموبايل */}
                <button
                    className="md:hidden p-2 rounded-lg border border-brand-pink/30 text-brand-pink"
                    onClick={() => setMobileOpen(v => !v)}
                    aria-label="فتح القائمة"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* قائمة الديسكتوب */}
                <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm">
                    <a href="#services" className="hover:text-brand-pink">الخدمات</a>
                    <a href="#process" className="hover:text-brand-pink">آلية العمل</a>
                    <a href="#gallery" className="hover:text-brand-pink">المعرض</a>
                    <a href={mapsUrl} target="_blank" rel="noreferrer" className="hover:text-brand-pink flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> موقعنا
                    </a>
                    <a href="#contact" className="btn-primary text-sm">احجزي الآن</a>
                </nav>
            </div>

            {/* قائمة الموبايل المنسدلة */}
            {mobileOpen && (
                <div className="md:hidden border-t border-brand-blush/60 bg-white/95 backdrop-blur">
                    <div className="container-lg py-3 flex flex-col gap-3 text-sm">
                        <a onClick={()=>setMobileOpen(false)} href="#services" className="hover:text-brand-pink">الخدمات</a>
                        <a onClick={()=>setMobileOpen(false)} href="#process" className="hover:text-brand-pink">آلية العمل</a>
                        <a onClick={()=>setMobileOpen(false)} href="#gallery" className="hover:text-brand-pink">المعرض</a>
                        <a onClick={()=>setMobileOpen(false)} href={mapsUrl} target="_blank" rel="noreferrer" className="hover:text-brand-pink flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> موقعنا
                        </a>
                        <a onClick={()=>setMobileOpen(false)} href="#contact" className="btn-primary text-center">احجزي الآن</a>
                    </div>
                </div>
            )}
        </header>


      <section className="relative" style={{backgroundImage:'linear-gradient(rgba(250,216,231,.55), rgba(255,247,251,.85)), url(', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="container-lg py-16 md:py-24 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="badge mx-auto mb-4">صالون نسائي فاخر</motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="text-3xl md:text-5xl font-extrabold mb-4">لجمالك لمسة... ولأناقتك تميّز</motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="max-w-2xl mx-auto mb-6 md:mb-8 text-brand-ink/80">خدمات قص الشعر، المكياج، العناية بالأظافر، والوصلات والصبغات بأيدٍ محترفة.</motion.p>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <motion.a variants={fadeUp} href="#contact" className="btn-primary">احجزي موعد</motion.a>
            <motion.a variants={fadeUp} href={`https://wa.me/${whatsapp}`} className="btn-ghost flex items-center gap-2"><MessageCircle className="w-4 h-4" /> تواصلي واتساب</motion.a>
          </motion.div>
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 text-brand-ink/60 text-xs md:text-sm">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-pink" /> فريق محترف</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-pink" /> جودة عالية</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-pink" /> مواعيد دقيقة</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-lg">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-2xl md:text-3xl font-bold mb-6 text-center text-brand-pink">من نحن</motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="text-center max-w-3xl mx-auto text-brand-ink/80">في "لمسة أناقة" نهتم بتقديم تجربة فاخرة متكاملة للمرأة العصرية. فريقنا مدرّب على أحدث التقنيات ونستخدم منتجات احترافية لنضمن لك نتائج تليق بذوقك. هدفنا لمستك الخاصة من الجمال.</motion.p>
        </div>
      </section>

      <section id="services" className="section bg-brand-light">
        <div className="container-lg">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-brand-pink">خدماتنا</motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
                <div
                    key={i}
                    onClick={() => toggle(i)} // للجوال: الضغط يفتح/يقفل التفاصيل
                    className="card group card-hover text-center cursor-pointer select-none"
                >
                    <div className="mb-4 flex justify-center">{s.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{s.desc}</p>

                    {/* التفاصيل - تظهر على الهوفر (ديسكتوب) أو عند الضغط (موبايل) */}
                    <div
                        className={`reveal border-t mt-4 pt-4 text-right
      ${openIdx === i ? 'max-h-44 opacity-100' : 'group-hover:max-h-44 group-hover:opacity-100'}`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-500">السعر</span>
                            <span className="font-semibold text-brand-pink">{s.price}</span>
                        </div>
                        <ul className="list-disc pr-5 text-sm text-gray-600 space-y-1">
                            {s.notes.map((n, j) => <li key={j}>{n}</li>)}
                        </ul>
                    </div>
                </div>

                // <motion.div key={i} variants={fadeUp} className="card text-center">
              //   <div className="mb-4 flex justify-center">{s.icon}</div>
              //   <h3 className="text-lg md:text-xl font-semibold mb-2">{s.title}</h3>
              //   <p className="text-gray-300 text-sm md:text-base">{s.desc}</p>
              // </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container-lg">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-brand-pink">آلية العمل</motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {['احجزي موعد عبر واتساب', 'اختاري خدمتك', 'استمتعي بتجربة فاخرة'].map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="card">
                <div className="text-3xl md:text-4xl font-extrabold text-brand-pink mb-2">{idx + 1}</div>
                <p className="text-sm md:text-base text-gray-200">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="section bg-brand-light">
        <div className="container-lg">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-brand-pink">المعرض</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((src, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                <img src={src} alt={`عمل ${i + 1}`} loading="lazy" className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow-card" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> زورينا في الموقع</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container-lg">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="text-2xl md:text-3xl font-bold mb-6 text-center text-brand-pink">تواصلي معنا</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="space-y-4 text-right">
              <p className="flex items-center justify-end gap-2"><Phone className="w-5 h-5 text-brand-pink" /> 0500000000</p>
              <p className="flex items-center justify-end gap-2"><Mail className="w-5 h-5 text-brand-pink" /> info@lamset-anaqa.com</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-end gap-2 hover:underline"><MapPin className="w-5 h-5 text-brand-pink" /> الموقع على الخرائط</a>
            </motion.div>
            <motion.form onSubmit={submit} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="الاسم"
                      className="w-full p-3 rounded-xl border border-brand-pink/30 bg-white
                       focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink"
                      required
                  />
                  <input
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      placeholder="الجوال"
                      className="w-full p-3 rounded-xl border border-brand-pink/30 bg-white
                        focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink"
                      required
                  />
                <select name="service" value={form.service} onChange={update}
                        className="w-full p-3 rounded-xl border border-brand-pink/30 bg-white
                          focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink">
                  <option>قص الشعر</option>
                  <option>استشوار</option>
                  <option>مكياج</option>
                  <option>العناية بالأظافر</option>
                  <option>وصلات الشعر</option>
                  <option>صبغة الشعر</option>
                  <option>أخرى</option>
                </select>
              </div>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="الرسالة"
                    rows="4"
                    className="w-full p-3 rounded-xl border border-brand-pink/30 bg-white mt-4
                     focus:outline-none focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink"
                />
              <div className="flex flex-wrap gap-3 mt-4 justify-end">
                <button type="submit" className="btn-primary">إرسال عبر واتساب</button>
                <a href={`tel:+${whatsapp}`} className="btn-ghost">اتصلي الآن</a>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 border-t border-brand-blush/60">
        <div className="container-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/projects/logo.svg" alt="شعار لمسة أناقة" className="w-10 h-10" />
            <p>© {new Date().getFullYear()} لمسة أناقة. جميع الحقوق محفوظة.</p>
          </div>
          <div className="flex items-center gap-4 text-brand-pink">
            <a href="#" aria-label="الموقع" className="flex items-center gap-1 hover:opacity-90"><Globe className="w-5 h-5" /> الموقع</a>
            <a href="#" aria-label="Instagram" className="flex items-center gap-1 hover:opacity-90"><Instagram className="w-5 h-5" /> إنستقرام</a>
            <a href="#" aria-label="Facebook" className="flex items-center gap-1 hover:opacity-90"><Facebook className="w-5 h-5" /> فيسبوك</a>
            <a href={`https://wa.me/${whatsapp}`} aria-label="WhatsApp" className="flex items-center gap-1 hover:opacity-90"><MessageCircle className="w-5 h-5" /> واتساب</a>
          </div>
        </div>
      </footer>
    </div>
  )
}