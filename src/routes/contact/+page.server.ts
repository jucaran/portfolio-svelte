import nodemailer from 'nodemailer'
import { SECRET_SENDGRID_KEY } from '$env/static/private'
import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
  default: async ({ request }) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: SECRET_SENDGRID_KEY
      }
    })

    const form = await request.formData()
    const msg = {
      to: 'juan.castro.arancibia@gmail.com',
      from: 'Portfolio <portfolio@jucaran.ar>',
      subject: 'Nuevo mensaje del portfolio!',
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande',
              sans-serif;
            padding: 2rem;
            background: #e8e8e8;
            font-size: 14px;
          "
        >
          <div
            style="
              margin: 20px auto;
              width: 400px;
              padding: 2rem;
              border-radius: 5px;
              box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
              background: white;
              color: black;
              ">
            <p>Nuevo mensaje desde el portfolio!</p>
            <p>Nombre:  ${form.get('name')}</p>
            <p>Email:  ${form.get('email')}</p>
            <p>
              Mensaje: ${form.get('message')}
            </p>
          </div>
        </body>
      </html>`
    }
    const response = await transporter.sendMail(msg)
    console.log('Mail response: ', response)
    return {
      success: true
    }
  }
}
