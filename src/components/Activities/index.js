import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';
import avatar2 from '../../images/pirocoptero-avatar.jpg';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@rychillie</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Rychillie</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 0,00</Value>

                        <Divider/>


                        <Feather name="lock" color="#fff" size={14} />
                        <Date>Há 2 anos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={avatar2} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@eduardofg87</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Eduardo</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 1.000,00</Value>

                        <Divider/>


                        <Feather name="lock" color="#fff" size={14} />
                        <Date>Há 5 minutos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
