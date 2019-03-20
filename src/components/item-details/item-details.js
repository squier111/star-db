import React , {Component} from 'react'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'
import ErrorBtn from '../error-button'


import './item-details.css'


const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span> {item[field]}</span>;
    </li>
  )
}

export {
  Record
};


class ItemView extends Component {
  constructor(){
    super();
    this.state={
    }
  };

  render() {
    const { item, image, children } =this.props;
    const { name } = item; 
    return(
      <>
        <div className="person-datails col-md-4 col-sm-4">
          <img className="person-image" src={image} alt=""/>
        </div>
        <div className="card-body col-md-8 col-sm-7">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, (child)=> {
                return React.cloneElement(child, {item});
            })
            }
          </ul>
          <ErrorBtn />
        </div>
      </>
    )
  }
}




export default class ItemDetails extends Component {

  swapiservice = new SwapiService();

  constructor(){
    super();
    this.state={
      item: {},
      image: null,
      loading: true,
      selectMe: true,
    }
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ) {
      this.updateItem();
    }
  }
  
  updateItem() {
    const {itemId , getData, getImageUrl} = this.props;
    if(!itemId) {
      return;
    }
    this.setState({
      loading: true,
      selectMe: false,
    });

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item.id),
          loading: false,
        });
      })
  }

  render() {

    if(!this.state.item) {
      return <span>Plz select person from list</span>
    }

    const {children} = this.props;
    const { loading, item , image , selectMe} = this.state;
    
    const spinner = loading && !selectMe  ? <Spinner /> : null;
    const chooseMe = selectMe ? <p>  &lt;=== Choose Me Mzfk</p> : null;
    const content = !loading ? <ItemView item={item} image={image} children={children} /> : null;
    return (
      <div className="row card">
        {spinner}
        {chooseMe}
        {content}
      </div>
    );
  }

}

