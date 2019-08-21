import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

function RenderLeaders (props) {

}

function History () {
    return (
        <Card
            featuredTitle="Our History"
            >
            <Text
                style={{ margin: 10 }}>
                Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                <br/>
                The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.
            </Text>
        </Card>
    );
}

class Contact extends Component {
    static navigationOptions = {
        title: 'About Us',
    };

    render() {
        const renderLeader = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: require('./images/uthappizza.png')}}
                    />
            )
        };

        const Leaders = () => {
            return (
                <Card
                    featuredTitle="Corporate Leadership"
                    >
                    <FlatList
                        data={this.state.dishes}
                        renderitem={renderLeader}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            );
        }

        return (
            <View>
                <History />
                <Leaders />
            </View>
        );
    }
}

export default Contact;