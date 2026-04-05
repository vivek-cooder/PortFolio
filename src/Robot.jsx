import { useInView } from "react-intersection-observer";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));
import './Robot.css'

export default function Robot() {
    const { ref, inView } = useInView({
        triggerOnce: false, // change to true if you want load only once
        threshold: 0.2, // 20% visible
    });
    return (
        <div className="robot" ref={ref} style={{ minHeight: "500px" }}>
            {inView ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <Spline
                        scene="https://prod.spline.design/ZgRiHIQFEW36y6EF/scene.splinecode"
                        dpr={[0, 0]}  // IMPORTANT: reduce GPU load
                        style={{ width: "100%", height: "100%" }}
                    />
                </Suspense>
            ) : null}
        </div>
    );
}
