import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table"
import TableItem from "../components/Tableitem"
import TableColumn from "../components/TableColumn"
import TableHead from "../components/TableHead"


function Index() {

    const [emp, setEmp] = useState([]);
    const [filterEmp, setFilterEmp] = useState([]);
    const [search,setSearch] = useState("");
    const [sort,setSort] = useState("");


    useEffect(() => {
        API.randomEMP()
            .then(({ data }) => {
                console.log(data.results)
                setFilterEmp(data.results);
                setEmp(data.results);
            })
    }, [])

    const sortName = (name) => {
        setSort(name);
    }

    useEffect(() => {
        const sortEMP = [...emp]
        if (sort === "Name"){
            sortEMP.sort(function(a,b) {
                if (a.name.first < b.name.first) return -1;
                else return 1;
            })
        } else if (sort === "Phone"){
                sortEMP.sort(function(a,b) {
                    if (a.phone < b.phone) return -1;
                    else return 1;
                })
        }

        setFilterEmp(sortEMP);
    }, [sort])


    const searchByName = event => {
        const {name, value} = event.target;
        setSearch(value);
    }

    useEffect(() => {
        const copyEmp = [...emp];
        const filterName = copyEmp.filter(person => {
            if (person.name.first.includes(search)){
                return true;
            } else return false;
        })
        setFilterEmp(filterName);
    },[search])

    return (
        <div>
             <input type="text" className="form-control mr-sm-2 bg-dark" value={search} onChange={searchByName} name="search" placeholder="Search"></input>
            <Table>
                <TableHead>
                    <TableColumn column="IMG"></TableColumn>
                    <TableColumn column="Name" sortIt={sortName}></TableColumn>
                    <TableColumn column="Phone" sortIt={sortName}></TableColumn>
                    <TableColumn column="E-mail"></TableColumn>
                    <TableColumn column="Dob"></TableColumn>
                </TableHead>
                <TableItem allEMP={filterEmp}></TableItem>

            </Table>
        </div>
    )
}



export default Index;