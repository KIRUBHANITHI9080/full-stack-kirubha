import Child from "./Child"

const Parent = () =>{
    return(
        <div>
            <Child name="KIRUBHA"
            age={17}
            isActive={true}
            mark={[99,98,97,96,95]}
            address={{
                pincode:641663,
                email:"rameshpandian3799@gmail.com",
                mobile:9080565394
            }} />
            <Child name="Lenny"
            age={19}
            isActive={true}
            mark={[92,93,94,95,96]}
            address={{
                pincode:641014,
                email:"lennyhaswanth@gmail.com",
                mobile:7395853200}}
            />
        </div>
    )
}
export default Parent 
