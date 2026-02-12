// For Nuxt 3 - Tree-shaken FontAwesome imports
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid icons (fa-solid)
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBars,
  faBolt,
  faBookOpen,
  faBrain,
  faBullseye,
  faBuilding,
  faCalendar as faCalendarSolid,
  faChalkboardUser,
  faCheck,
  faChartLine,
  faCode,
  faCogs,
  faComments,
  faDatabase,
  faEnvelope,
  faEnvelopeOpen,
  faExclamationTriangle,
  faGraduationCap,
  faHandshake,
  faHome,
  faICursor,
  faLightbulb,
  faMessage,
  faNetworkWired,
  faPaperPlane,
  faPlug,
  faRightFromBracket,
  faRobot,
  faRocket,
  faStar,
  faTerminal,
  faUser,
  faUsers,
  faWandMagicSparkles,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

// Regular icons (fa-regular)
import {
  faCalendar as faCalendarRegular,
  faClock,
  faNewspaper
} from '@fortawesome/free-regular-svg-icons'

// Brand icons (fa-brands)
import {
  faGithub,
  faLaravel,
  faLinkedin,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

// Add solid icons
library.add(
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBars,
  faBolt,
  faBookOpen,
  faBrain,
  faBullseye,
  faBuilding,
  faCalendarSolid,
  faChalkboardUser,
  faCheck,
  faChartLine,
  faCode,
  faCogs,
  faComments,
  faDatabase,
  faEnvelope,
  faEnvelopeOpen,
  faExclamationTriangle,
  faGraduationCap,
  faHandshake,
  faHome,
  faICursor,
  faLightbulb,
  faMessage,
  faNetworkWired,
  faPaperPlane,
  faPlug,
  faRightFromBracket,
  faRobot,
  faRocket,
  faStar,
  faTerminal,
  faUser,
  faUsers,
  faWandMagicSparkles,
  faXmark
)

// Add regular icons
library.add(
  faCalendarRegular,
  faClock,
  faNewspaper
)

// Add brand icons
library.add(
  faGithub,
  faLaravel,
  faLinkedin,
  faVuejs
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
