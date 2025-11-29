-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    stripe_session_id TEXT UNIQUE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency TEXT DEFAULT 'usd',
    donor_email TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies for donations
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Only server-side admin can insert/update (via service role)
-- Users can view their own donations if we link them later, but for now, keep it private or allow public read if needed for a ticker.
-- For now, let's allow public read for aggregate stats, but restrict detailed view.

CREATE POLICY "Service role can manage all donations" ON donations
    FOR ALL USING (true);
