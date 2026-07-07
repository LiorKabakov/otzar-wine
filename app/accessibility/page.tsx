import type { Metadata } from 'next'
import LegalShell from '@/components/LegalShell'

export const metadata: Metadata = {
  title: 'הצהרת נגישות | אוצר היין',
  description:
    'הצהרת הנגישות של אוצר היין — רמת הנגישות של האתר, מה הונגש, ודרכי פנייה בנושא נגישות.',
}

export default function AccessibilityPage() {
  return (
    <LegalShell>
      <article className="legal-prose">
        <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] text-text">
          הצהרת נגישות
        </h1>
        <p className="text-sm text-muted">עודכן לאחרונה: 07/07/2026</p>

        <p>
          אוצר היין רואה חשיבות רבה במתן שירות שוויוני ונגיש לכלל הלקוחות, לרבות
          אנשים עם מוגבלות, ופועל להנגשת האתר.
        </p>

        <h2>רמת הנגישות</h2>
        <p>
          אנו שואפים להתאים את האתר לתקן הישראלי <strong>ת״י 5568</strong>{' '}
          המבוסס על הנחיות <strong>WCAG 2.0 ברמה AA</strong>, ובהתאם לתקנות שוויון
          זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013.
        </p>

        <h2>מה הונגש באתר</h2>
        <ul>
          <li>מבנה סמנטי ותמיכה מלאה בעברית ובכיוון RTL.</li>
          <li>ניווט באמצעות מקלדת וסימון פוקוס נראה.</li>
          <li>טקסט חלופי (alt) לתמונות בעלות משמעות.</li>
          <li>ניגודיות צבעים והיררכיית כותרות.</li>
          <li>
            כיבוד העדפת המשתמש להפחתת אנימציות (prefers-reduced-motion).
          </li>
        </ul>

        <h2>מגבלות ידועות</h2>
        <p>
          לא ידועות מגבלות נגישות נכון למועד עדכון ההצהרה.
        </p>

        <h2>פנייה בנושא נגישות (רכז נגישות)</h2>
        <p>
          נתקלת בבעיה או שיש לך הצעה לשיפור הנגישות? נשמח לפנייתך:
        </p>
        <ul>
          <li>
            <strong>רכז/ת נגישות:</strong> דן אוחיון
          </li>
          <li>
            <strong>טלפון:</strong>{' '}
            <a href="tel:+972504922311">
              <bdi dir="ltr">050-492-2311</bdi>
            </a>
          </li>
          <li>
            <strong>דוא״ל:</strong> otzarwine1477@gmail.com
          </li>
        </ul>
        <p>נשתדל לטפל בפניות בתוך זמן סביר.</p>

        <p>
          <strong>תאריך עדכון ההצהרה:</strong> 07/07/2026
        </p>
      </article>
    </LegalShell>
  )
}
