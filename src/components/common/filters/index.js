import "./filters.css";
import FilterItem from "./filterItem";

export default function Filters({filterList}){

    return (
        <div className="filters">
        {filterList &&
            filterList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id} />;
            })}
        </div>
    );
}