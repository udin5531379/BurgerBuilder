import React from "react";
import Aux from '../../../hoc/Aux'
import classes from './OrderSummary.module.css'
import ImagesPool from '../../../Images/ImagesPool'
import CustomButton from '../../Button/Button'

const orderSummary = (props) => {
    
    // const orderSummaryList = Object.keys(props.ingredientsFromModal).map((eachIngredients) => {
    //     return(
    //         <li key={eachIngredients} className={classes.li}>
    //             <span className={classes.span}>{eachIngredients}</span>: {props.ingredientsFromModal[eachIngredients]}
    //         </li>
    //     ) 
    // })

    const orderSummaryList = Object.keys(props.ingredientsFromModal).map((eachIngredients) => {
        return(
            ImagesPool.map((imgSrc, index) => {
                while(imgSrc.type === eachIngredients){
                    return (
                        <div>
                            <div className = {classes.imagesAndCount}>
                                <div className = {classes.align}>
                                    <img alt="sourceImages" src = {imgSrc.src} key={imgSrc.type}/> 
                                </div>
                                <div className={classes.align}>
                                    -{">"}
                                </div>
                                <div className = {classes.align}>
                                    {props.ingredientsFromModal[eachIngredients]}
                                </div>
                            </div>
                        </div>
                    )
                }
                
            })
        ) 
    })
    
    // const listOfImages = ImagesPool.map((imgSrc, index) => {
    //     return (
    //         <div>
    //             <img src = {imgSrc.src} />
    //         </div>
    //         )
    // })


    

    return(
        <Aux>
            <h2 className={classes.h2}>Here are the things you ordered:</h2>
            <ul className={classes.ul}>
                {orderSummaryList}
            </ul>
            <div className={classes.ContinueAndCancelButton}>
                <CustomButton className={classes.align} btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</CustomButton>
                <CustomButton className={classes.align} btnType={"Danger"} clicked={props.modalDismiss}>CANCEL</CustomButton>
            </div>
            
        </Aux>
    )

}

export default orderSummary