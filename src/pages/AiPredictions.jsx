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
        <div className='mt-3 space-y-3'>
            <StateCard3 />

            <div className="grid grid-cols-2 gap-3">
                <PredictionAccuracy />
                <PredictionDistribution />
            </div>

            <div>
                <TopPredictedRisks />
            </div>
        </div>

        <div className="mt-3 flex gap-3">

            <div className="flex-[2]">
                <RecentAIPredictions />
            </div>

            <div className="flex-1">
                <PredictionAccuracyByType />
            </div>

        </div>
        
        <div className="mt-3 flex gap-3">

            <div className="flex-1">
                <PredictedImpact />
            </div>

            <div className="flex-1">
                <TopRecommendations />
            </div>

        </div>
    </Fragment>
  )
}

export default AiPredictions