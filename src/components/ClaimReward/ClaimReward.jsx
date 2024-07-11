import { useContext} from "react";
import web3Context from "../../context/Web3Context"
import Button from "../Button/Button";
//import Button from "../../components/Button/Button";
import { toast } from "react-hot-toast";
import "./ClaimReward.css"

const ClaimReward = ()=>{
 const {stakingContract}=useContext(web3Context);
 const claimReward = async()=>{
  try{
    const transaction = await stakingContract.getReward();
    await toast.promise(transaction.wait(),
    {
      loading: "Transaction is pending...",
      success: 'Transaction successful 👌',
      error: 'Transaction failed 🤯'
    });
  
  }catch(error){
    console.error("Claim Reward Failed",error.message)
  }
 }
 return (
    <>
    <div className="claim-reward">
     <Button type="button" label="Claim Reward" onClick={claimReward}/>
     </div>
    </>
 )
}

export default ClaimReward;