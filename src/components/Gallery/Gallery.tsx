import GalleryItem from './GalleryItem';
import homes from '../../data/placeholder';
import GImg1 from '../../assets/images/g1.jpg';
import GImg2 from '../../assets/images/g2.jpg';

const Gallery = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <GalleryItem
            img={GImg1}
            address={
              homes[0].address.street +
              ', ' +
              homes[0].address.city +
              ', ' +
              homes[0].address.state +
              ' ' +
              homes[0].address.zipcode
            }
            link={`/homes/${homes[0].pid.toString()}`}
          />
          <GalleryItem
            img={GImg2}
            address={
              homes[1].address.street +
              ', ' +
              homes[1].address.city +
              ', ' +
              homes[1].address.state +
              ' ' +
              homes[1].address.zipcode
            }
            link={`/homes/${homes[1].pid.toString()}`}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <GalleryItem
              img={GImg1}
              address={
                homes[0].address.street +
                ', ' +
                homes[0].address.city +
                ', ' +
                homes[0].address.state +
                ' ' +
                homes[0].address.zipcode
              }
              link={`/homes/${homes[0].pid.toString()}`}
            />
            <GalleryItem
              img={GImg2}
              address={
                homes[1].address.street +
                ', ' +
                homes[1].address.city +
                ', ' +
                homes[1].address.state +
                ' ' +
                homes[1].address.zipcode
              }
              link={`/homes/${homes[1].pid.toString()}`}
            />
          </div>
          <GalleryItem
            img={GImg1}
            address={
              homes[0].address.street +
              ', ' +
              homes[0].address.city +
              ', ' +
              homes[0].address.state +
              ' ' +
              homes[0].address.zipcode
            }
            link={`/homes/${homes[0].pid.toString()}`}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <GalleryItem
          img={GImg1}
          address={
            homes[0].address.street +
            ', ' +
            homes[0].address.city +
            ', ' +
            homes[0].address.state +
            ' ' +
            homes[0].address.zipcode
          }
          link={`/homes/${homes[0].pid.toString()}`}
        />
        <GalleryItem
          img={GImg2}
          address={
            homes[1].address.street +
            ', ' +
            homes[1].address.city +
            ', ' +
            homes[1].address.state +
            ' ' +
            homes[1].address.zipcode
          }
          link={`/homes/${homes[1].pid.toString()}`}
        />
      </div>
    </section>
  );
};

export default Gallery;
