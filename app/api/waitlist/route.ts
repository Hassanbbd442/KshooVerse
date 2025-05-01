
import { NextResponse } from 'next/server';
import { addToWaitlist } from '@/lib/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }


        const success = await addToWaitlist(email);

        if (!success) throw new Error('Google Sheets error');

        return NextResponse.json({ message: 'Successfully joined the waitlist!' });
            } catch (error) {
                console.error(error);
                return NextResponse.json({ error: 'Failed to submit waitlist' }, { status: 500 });
            }
    }
    // TODO: Replace with actual database/storage/integration logic
    // console.log(`New waitlist submission: ${email}`);

   return NextResponse.json(
       { message: 'Successfully joined the waitlist!' },
       { status: 200 }
     );
   } catch (error) {
     console.error('Waitlist POST error:', error);
     return NextResponse.json(
       { error: 'Internal server error' },
       { status: 500 }
     );
   }
 }
