import { useEffect, useState } from 'react'

const LoadingSpinner = ({ loadingCompleted }) => {
  const [startAnimation, setStartAnimation] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [remove, setRemove] = useState(false)
  useEffect(() => {
    if (loadingCompleted) {
      setStartAnimation(true)
    }
  }, [loadingCompleted])
  const handleAnimationEnd = () => {
    setFadeOut(true)
    setTimeout(() => setRemove(true), 400)
  }
  if (remove) return null
  return (
    <div
      className={`loader-wrap ${fadeOut ? 'fade-out' : ''}`}
      style={{
        transition: 'opacity 0.4s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <div className="preloader style-two">
        <div
          className="preloader-close"
          onClick={() => setRemove(true)}
        >
          Yükleyiciyi Kapat
        </div>
      </div>
      <div className="layer layer-one">
        <span
          className={`overlay`}
          style={{
            animation: startAnimation
              ? 'slideOverlay 1.8s cubic-bezier(0.77, 0, 0.175, 1) forwards'
              : undefined,
          }}
          onAnimationEnd={handleAnimationEnd}
        ></span>
      </div>
      <div className="layer layer-two">
        <span
          className={`overlay`}
          style={{
            animation: startAnimation
              ? 'slideOverlay 1.8s cubic-bezier(0.77, 0, 0.175, 1) forwards'
              : undefined,
          }}
        ></span>
      </div>

      <div className="layer layer-three">
        <span
          className={`overlay`}
          style={{
            animation: startAnimation
              ? 'slideOverlay 1.8s cubic-bezier(0.77, 0, 0.175, 1) forwards'
              : undefined,
          }}
        ></span>
      </div>
    </div>
  )
}

export default LoadingSpinner
