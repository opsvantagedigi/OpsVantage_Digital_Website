import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Mock data for now
  const data = {
    websiteHealth: {
      uptime: '99.98%',
      performance: 'A (95%)',
      security: 'No issues',
    },
    aiAgentStatus: {
      status: 'Operational',
      lastSync: new Date().toISOString(),
      accuracy: '98.2%',
    },
    renewals: {
      domain: '2026-08-15',
      hosting: '2026-07-30',
      ssl: '2026-07-01',
    },
  };

  return NextResponse.json(data);
}
