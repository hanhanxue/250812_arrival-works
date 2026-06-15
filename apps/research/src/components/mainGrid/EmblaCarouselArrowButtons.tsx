import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
    const [prevButtonDisabled, setPrevButtonDisabled] = useState(true)
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevButtonDisabled(!emblaApi.canScrollPrev())
        setNextButtonDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)     
    }, [emblaApi, onSelect])


return {
    prevButtonDisabled,
    nextButtonDisabled,
    onPrevButtonClick,
    onNextButtonClick
}
}


