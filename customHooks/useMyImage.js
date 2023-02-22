import { useEffect, useState } from 'react'
import dawn from '../images/dawn.png'
import morning from '../images/morning.png'
import noon from '../images/noon.png'
import dusk from '../images/dusk.png'
import midnight from '../images/midnight.png'

const useMyImage = () => {
    const [image, setImage] = useState(null);
    const date = new Date();

    useEffect(() => {
        const hour = date.getHours();
        if (hour >= 5 && hour < 7) {
            setImage(dawn);
        } else if (hour >= 7 && hour < 12) {
            setImage(morning);
        } else if (hour >= 12 && hour < 17) {
            setImage(noon);
        } else if (hour >= 17 && hour < 18) {
            setImage(dusk);
        } else {
            setImage(midnight);
        }
    }, [])

    return image && image
}

export default useMyImage