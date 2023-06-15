import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import phone from "../IMG/phone.png"
import CartIcon from "./icons/CartIcon";
const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0;
`
const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`
const Desc = styled.p`
    color:#aaa;
    font-size: .8rem;
`
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px; 
    img{
        max-width: 100%;
    }
`
const Column = styled.div`
    display: flex;
    align-items: center;
`
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`

export default function Featured({product}){
    return(
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink
                                    href ={'/product/'+product._id}
                                    outline={1}
                                    white={1} 
                                    size={'l'}
                                    >Read more</ButtonLink>
                                <Button primary={1} size={'l'}>
                                    <CartIcon/>
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>    
                        </div>
                    </Column>
                    <Column>
                        <Image src={phone} alt=""/>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )

}