import Popular from "../components/Popular"
import Veggie from "../components/Veggie"
import{motion} from "framer-motion"
function Home() {
  return (
    <motion.div
    animate={{opactiy:1}}
    initial={{opactiy:0}}
    exit={{opactiy:0}}
    transition={{duration:1}}>
      <Veggie/>
      <Popular/>
    </motion.div>
  )
}

export default Home
