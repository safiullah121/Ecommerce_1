import {createClient} from "@supabase/supabase-js";

const url = 'https://lvinfkqmgbujiczjwpct.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2aW5ma3FtZ2J1amljemp3cGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4MjU3NDIsImV4cCI6MjAwNzQwMTc0Mn0.y4GmlVvQJBmcOqCQBRG1wcRJf7mFR8izGnUWk4ygnk4';

export const supabase = createClient(url, key);