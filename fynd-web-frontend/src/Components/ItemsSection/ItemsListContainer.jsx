import ItemCard from "./ItemCard";
import "./objects-container.css";

export default function ItemsListContainer({
  selectedFilter,
  itemsList,
  orderBy,
  onItemClick,
  children
}) {

  const displayedItems =
    selectedFilter == "todas"
      ? itemsList
      : itemsList.filter((item) => item[orderBy] == selectedFilter);

  
  return (
    <div className="items-container">

   


      {displayedItems.map((object) => (
        <ItemCard
          key={object.id}
          item={object}
          onItemClick={onItemClick}
          extraContent={children}
        />
      ))}
    </div>
  );
}
