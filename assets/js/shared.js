/**
 * LilQuin Kitchen — Shared JavaScript (all pages)
 * - Hamburger menu toggle
 * - Google Calendar Appointment Scheduling Modal
 */
(function () {
  if (window.__lilquinSharedInit) return;
  window.__lilquinSharedInit = true;

  // --- Configuration ---
  // To link your live Google Calendar, set your Appointment Schedule link below:
  // e.g. "https://calendar.google.com/calendar/appointments/schedules/AcZssZ..."
  window.LILQUIN_CONFIG = window.LILQUIN_CONFIG || {
    googleCalendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Ot9G4efE-T0_JqhhDPxNDLygju8Fk7xvW5gve3LJk5T_NbesM4SQqFzNWwOyOut3eGu9FzSpq?gv=true"
  };

  // --- Hamburger Menu ---
  var h = document.querySelector('.hamburger'), hdr = document.querySelector('header');
  if (h && hdr) {
    h.addEventListener('click', function (e) {
      e.stopPropagation();
      var o = hdr.classList.toggle('nav-open');
      h.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    hdr.querySelectorAll('.links a').forEach(function (a) {
      a.addEventListener('click', function () {
        hdr.classList.remove('nav-open');
        h.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function (e) {
      if (!hdr.contains(e.target)) {
        hdr.classList.remove('nav-open');
        h.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Google Calendar Booking Modal ---
  // --- Security Helpers ---
  function isValidCalendarUrl(str) {
    if (!str || typeof str !== 'string') return false;
    try {
      var u = new URL(str.trim());
      return u.protocol === 'https:' &&
        u.hostname === 'calendar.google.com' &&
        u.pathname.indexOf('/calendar/appointments/schedules/') === 0;
    } catch (e) {
      return false;
    }
  }

  // --- Google Calendar Booking Modal ---
  var modalEl = null;

  function createModal() {
    if (modalEl) return modalEl;

    var rawUrl = window.LILQUIN_CONFIG.googleCalendarUrl;
    var isLiveUrl = isValidCalendarUrl(rawUrl);

    var backdrop = document.createElement('div');
    backdrop.className = 'booking-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-hidden', 'true');

    var contentHtml = '';
    if (!isLiveUrl) {
      // Interactive Atelier Preview & Schedule Selector (Safe Fallback)
      contentHtml =
        '<div class="booking-preview-card">' +
        '<div class="booking-preview-badge">Live Calendar Integration Ready</div>' +
        '<h3 style="font-family:\'Fraunces\',Georgia,serif;font-size:22px;color:var(--ink);font-weight:400;margin:6px 0;">Atelier Tasting & Consultations</h3>' +
        '<p style="color:var(--muted);font-size:14px;max-width:500px;line-height:1.5;">' +
        'Every Saturday from 10:00 to 17:00 at our Bekasi studio. Select an available session to meet head baker Yusi, taste 6 signature sponges, and sketch your cake florals.' +
        '</p>' +
        '<div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:8px;">Available Saturday Sessions</div>' +
        '<div class="booking-slot-grid">' +
        '<button type="button" class="booking-slot-btn" data-time="10:00 AM">10:00 AM — 11:30 AM</button>' +
        '<button type="button" class="booking-slot-btn" data-time="12:00 PM">12:00 PM — 01:30 PM</button>' +
        '<button type="button" class="booking-slot-btn" data-time="02:00 PM">02:00 PM — 03:30 PM</button>' +
        '<button type="button" class="booking-slot-btn" data-time="04:00 PM">04:00 PM — 05:30 PM</button>' +
        '</div>' +
        '<div id="booking-action-row" style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:12px;">' +
        '<a class="btn" id="booking-confirm-wa" href="https://wa.me/628977555739?text=Hi%20LilQuin%20Kitchen,%20I%20would%20like%20to%20reserve%20a%20cake%20tasting%20session." target="_blank" rel="noopener noreferrer">Confirm via WhatsApp →</a>' +
        '<a class="btn light" href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">Open Google Calendar</a>' +
        '</div>' +
        '<div style="background:var(--cream2);padding:10px 16px;border-radius:10px;font-size:12px;color:var(--muted);max-width:540px;margin-top:10px;text-align:left;">' +
        '<strong>💡 Studio Setup:</strong> When you have your official Google Calendar Appointment Schedule link, set <code>window.LILQUIN_CONFIG.googleCalendarUrl</code> in <code>assets/js/shared.js</code>.' +
        '</div>' +
        '</div>';
    }

    backdrop.innerHTML =
      '<div class="booking-modal">' +
      '<div class="booking-header">' +
      '<div>' +
      '<div style="font-family:\'Jost\',sans-serif;font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:var(--accent);font-weight:600;margin-bottom:4px;">Google Calendar Schedule</div>' +
      '<h2 class="booking-title">Book a Tasting & Consultation</h2>' +
      '<p class="booking-subtitle">Choose a dedicated date & time slot directly with LilQuin Kitchen atelier.</p>' +
      '</div>' +
      '<button class="booking-close" aria-label="Close booking modal">&times;</button>' +
      '</div>' +
      '<div class="booking-body">' + contentHtml + '</div>' +
      '<div class="booking-footer">' +
      '<span>Atelier Studio: Komp. Depnaker, Bekasi</span>' +
      '<span style="display:flex;gap:16px;">' +
      '<a href="https://wa.me/628977555739" target="_blank" rel="noopener noreferrer" style="color:var(--ink);text-decoration:underline;">Need help? WhatsApp Us</a>' +
      '</span>' +
      '</div>' +
      '</div>';

    // Safely inject the sandboxed Google Calendar iframe via DOM API
    if (isLiveUrl) {
      var bodyEl = backdrop.querySelector('.booking-body');
      var iframe = document.createElement('iframe');
      iframe.className = 'booking-iframe';
      iframe.src = rawUrl.trim();
      iframe.title = 'Google Calendar Appointment Schedule';
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox');
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      iframe.setAttribute('frameborder', '0');
      bodyEl.appendChild(iframe);
    }

    document.body.appendChild(backdrop);

    // Slot selection logic in preview mode
    var slots = backdrop.querySelectorAll('.booking-slot-btn');
    var waBtn = backdrop.querySelector('#booking-confirm-wa');
    slots.forEach(function (slot) {
      slot.addEventListener('click', function () {
        slots.forEach(function (s) { s.classList.remove('selected'); });
        slot.classList.add('selected');
        var time = slot.getAttribute('data-time');
        if (waBtn) {
          var msg = encodeURIComponent("Hi LilQuin Kitchen, I would like to book a Saturday tasting session at " + time + ".");
          waBtn.href = "https://wa.me/628977555739?text=" + msg;
          waBtn.textContent = "Confirm " + time + " via WhatsApp →";
        }
      });
    });

    // Close events
    var closeBtn = backdrop.querySelector('.booking-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeModal();
    });

    modalEl = backdrop;
    return modalEl;
  }

  function openModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    var m = createModal();
    m.classList.add('active');
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal();
    }
  });

  // Bind clicks to open booking modal on any designated trigger
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-open-booking], a[href="#book-consultation"], a[href="#book-tasting"]');
    if (trigger) {
      openModal(e);
    }
  });

  window.openLilquinBooking = openModal;
  window.closeLilquinBooking = closeModal;
})();
