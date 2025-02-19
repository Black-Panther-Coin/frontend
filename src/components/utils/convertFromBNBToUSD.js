import { ethers } from 'ethers'
import { GetChainlinkAggregatorV3InterfaceABI } from './getChainlinkAggregatorV3InterfaceABI'

export const ConvertFromBNBToUSD = async (bnb) => {
    const v3InterfaceABI = GetChainlinkAggregatorV3InterfaceABI

    const provider = new ethers.providers.JsonRpcProvider(
        "https://few-black-meadow.bsc.quiknode.pro/a8eccc53cb4b785e96a07e78b7f454b389aebf6a"
    )


    const priceFeed = new ethers.Contract(
        "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE",
        v3InterfaceABI,
        provider    
    )

    const latestRoundData = await priceFeed.latestRoundData()
    const decimals = await priceFeed.decimals()

    const valueOfOneBNB = Number(
        (latestRoundData.answer.toString() / Math.pow(10, decimals)).toFixed(2)
    )
    
    console.log("valueOfOneBNB", valueOfOneBNB)
    
    return Number((bnb * valueOfOneBNB).toFixed(2))
}