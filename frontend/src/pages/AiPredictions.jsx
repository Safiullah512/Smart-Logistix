import { Fragment } from 'react'
import StateCard3 from '../components/StateCard3'
import PredictionAccuracy from '../components/ai-predictions/PredictionAccuracy'
import PredictionDistribution from '../components/ai-predictions/PredictionDistribution'
import TopPredictedRisks from '../components/ai-predictions/TopPredictedRisks'
import RecentAIPredictions from '../components/ai-predictions/RecentAIPredictions'
import PredictionAccuracyByType from '../components/ai-predictions/PredictionAccuracyByType'
import PredictedImpact from '../components/ai-predictions/PredictedImpact'
import TopRecommendations from '../components/ai-predictions/TopRecommendations'

const AiPredictions = () => {
  return (
    <Fragment>
        <div className="pb-3">
            <div className='mt-3 space-y-3'>
                <StateCard3 />

                <div className="grid grid-cols-2 gap-3">
                    <PredictionAccuracy />
                    <div className="flex flex-col gap-3">
                        <PredictionDistribution />
                        <PredictionAccuracyByType />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <TopPredictedRisks />
                    <TopRecommendations />
                </div>
            </div>

            <div className="mt-3">
                <RecentAIPredictions />
            </div>
            
            <div className="mt-3">

                <PredictedImpact />

            </div>
        </div>
    </Fragment>
  )
}

export default AiPredictions