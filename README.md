# Hajar Elyazri — Portfolio

React + Vite portfolio.

## EmailJS Contact Setup

1. Install the EmailJS browser SDK:

   ```bash
   npm install @emailjs/browser
   ```

2. Create a `.env` file in the project root with these values:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. In EmailJS, configure a template that expects these parameters:
   - `from_name`
   - `from_email`
   - `message`

4. Restart the Vite dev server after adding environment variables.

The contact form will now send messages directly through EmailJS without opening the user's email application.
