import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import style from '../comp/Services/service.module.css'
import webPic from '../assets/web-development.gif'
import MObPic from '../assets/mobile_development2.gif'


export default class Prec extends React.Component {


    componentWillMount() {
        this.setState({
            children: [{title:'Web Development',
        desc:'hahahahah',
    pic:`${MObPic}`,
},
{title:'Web Development',
        desc:'hahahahah',
    pic:`${webPic}`,
}
,
{title:'Web Development',
        desc:'hahahahah',
    pic:`${webPic}`,
}
], ///is array me objects set krwany hyn
            activeItemIndex: 0,
        });

        // setTimeout(() => {
        //   this.setState({
        //     children: createChildren(20),
        //   })
        // }, 100);
    }


    // createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

    // changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;

        return (
            <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder={false}
                numberOfPlaceholderItems={5}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 400, background: 'red' }}>
                    hy
                </div>}


                // Carousel configurations
                numberOfCards={2}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={true}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                

                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={true}
            >
                {children.map((obj) => {
                    return (
                        
                            <div className={style.subMain}>
                                <div className={style.leftDiv}>
                                    <h1>
                                        {obj.title}
                                     </h1>
                                    <p>
                                       {obj.desc}
                                    </p>
                                </div>
                                <div className={style.rightDiv}>
                                    <img style={{ maxWidth: '100%', float: 'right' }} src={obj.pic} />
                                </div>
                            </div>
                        
                    )
                })}
            </ItemsCarousel>
        );
    }
}