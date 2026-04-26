import nodemailer from "nodemailer";

export async function sendMail(
  email: string,
  city: string,
  keyword: string,
  results: string[],
  website: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"City Alert System" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `🚨 New ${city} Alert for "${keyword}"`,
    html: `
      <div style="
        margin:0;
        padding:40px 20px;
        background:#000000;
        font-family:Arial, sans-serif;
        color:white;
      ">

        <!-- Outer Glow Background -->
        <div style="
          max-width:650px;
          margin:auto;
          padding:2px;
          border-radius:24px;
          background:linear-gradient(135deg,#7c3aed,#2563eb);
        ">

          <!-- Glass Card -->
          <div style="
            background:rgba(15,23,42,0.92);
            border-radius:22px;
            padding:40px;
            color:white;
          ">

            <!-- Header -->
            <div style="text-align:center; margin-bottom:30px;">
              <h1 style="
                margin:0;
                font-size:32px;
                font-weight:700;
                color:white;
              ">
                🚨 City Alert Notification
              </h1>

              <p style="
                margin-top:12px;
                color:#cbd5e1;
                font-size:16px;
              ">
                Real-time updates from your selected city
              </p>
            </div>

            <!-- Intro -->
            <p style="
              font-size:16px;
              color:#e5e7eb;
              line-height:1.6;
              margin-bottom:25px;
            ">
              A new update has been found matching your alert preferences.
            </p>

            <!-- Info Card -->
            <div style="
              background:rgba(255,255,255,0.06);
              padding:18px;
              border-radius:14px;
              margin-bottom:25px;
              border:1px solid rgba(255,255,255,0.08);
            ">
              <p style="margin:8px 0; font-size:15px;">
                <strong style="color:#a78bfa;">City:</strong> ${city}
              </p>
              <p style="margin:8px 0; font-size:15px;">
                <strong style="color:#a78bfa;">Keyword:</strong> ${keyword}
              </p>
            </div>

            <!-- Updates Card -->
            <div style="
              background:rgba(255,255,255,0.04);
              padding:20px;
              border-radius:14px;
              margin-bottom:30px;
              border-left:4px solid #8b5cf6;
            ">
              <h3 style="
                margin-top:0;
                color:#c4b5fd;
                font-size:18px;
              ">
                Latest Updates
              </h3>

              <p style="
                margin:0;
                color:#f3f4f6;
                font-size:15px;
                line-height:1.8;
              ">
                ${results.join("<br/><br/>")}
              </p>
            </div>

            <!-- Button -->
            <div style="text-align:center; margin-bottom:30px;">
              <a href="${website}" style="
                display:inline-block;
                padding:14px 28px;
                border-radius:12px;
                text-decoration:none;
                color:white;
                font-weight:600;
                background:linear-gradient(90deg,#7c3aed,#2563eb);
                box-shadow:0 8px 20px rgba(124,58,237,0.35);
              ">
                View Official Website
              </a>
            </div>

            <!-- Footer -->
            <div style="
              text-align:center;
              padding-top:20px;
              border-top:1px solid rgba(255,255,255,0.08);
              color:#94a3b8;
              font-size:13px;
            ">
              You are receiving this alert because you subscribed to updates for
              <strong style="color:white;"> ${city} </strong>
              with keyword
              <strong style="color:white;"> ${keyword} </strong>.
              <br/><br/>
              <span style="color:#a78bfa;">City Alert System</span>
            </div>

          </div>
        </div>
      </div>
    `,
  });
}