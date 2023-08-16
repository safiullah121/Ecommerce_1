import {createClient} from "@supabase/supabase-js";

const url = 'https://sbiybylnbvvfahabghbu.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiaXlieWxuYnZ2ZmFoYWJnaGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NDc1MjEsImV4cCI6MjAwNzMyMzUyMX0.vS-pkJ-KaQ7PyQ-IvFGAW7ldZ0y_QZwk0H5SVtlDjsY';

export const supabase = createClient(url, key);