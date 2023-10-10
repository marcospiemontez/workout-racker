import { ref } from 'vue';
import type { Session } from '@supabase/gotrue-js/src/lib/types'


const userSession = ref<Session | null>(null)

export { 
  userSession,
}