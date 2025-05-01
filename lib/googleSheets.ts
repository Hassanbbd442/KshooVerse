import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import credentials from './credentials.json'; // adjust path if needed

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = '1LzXrlbWuqnuoSQwhXLHJ7M40ygEs89eKe7bjPXWcsk8'; // from your sheet URL

const auth = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export async function addToWaitlist(email: string) {
  const date = new Date().toISOString();
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Waitlist!A:B',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[email, date]],
    },
  });

  return response.status === 200;
}
