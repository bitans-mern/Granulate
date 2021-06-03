import {useState, useEffect} from 'react';

const cachedInstances = {};
const InstanceSelection = () => {

    const [isServiceLoading, setIsServiceLoading] = useState(true);
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(-1);
    const [isInstanceLoading, setIsInstanceLoading] = useState(true);
    const [instances, setInstances] = useState({});
    
    useEffect(() => {
        const loadServices = async () => {
            try {
                const servicesResponse = await fetch('/api/v1/services');
                const services = await servicesResponse.json();
                setServices(services);
            } catch(e) {
                console.error(e);
            }
            setIsServiceLoading(false);
        };
        loadServices();
    }, []);

    const onServiceSelected = (evt) => {
        setSelectedService(evt.target.value);
        setIsInstanceLoading(true);
    };

    useEffect(() => {
        if (selectedService === -1) {
            setInstances({});
            setIsInstanceLoading(false);
            return;
        }
        if (cachedInstances[selectedService]) {
            setInstances(cachedInstances[selectedService]);
            setIsInstanceLoading(false);
            return;
        }
        const loadInstances = async () => {
            try {
                const instancesResponse = await fetch(`/api/v1/instances/${selectedService}`);
                const instances = await instancesResponse.json();
                cachedInstances[selectedService] = instances;
                setInstances(instances);
            } catch(e) {
                console.info(e);
                setInstances({});
            }
            setIsInstanceLoading(false);
        };
        loadInstances();
    }, [selectedService]);

    return (
        <div className="content">
            <h1>Instance Selection</h1>
            <div className="select">
                {isServiceLoading ? <h3>Loading Services...</h3> : ''}
                <label>Select a service :</label>
                <select disabled={isServiceLoading} onChange={onServiceSelected} >
                    <option value="-1" >Select a service</option>
                    {services.map((service, index) => {
                        return <option value={service} key={index} >{service}</option>
                    })}
                </select>
            </div>
            <div className="select">
                {isInstanceLoading ? <h3>Loading Instances...</h3> : ''}
                <label>Select an instance:</label>
                <select disabled={isInstanceLoading || isServiceLoading} >
                    <option value="-1">Select an instance</option>
                    {Object.keys(instances).map((instance, index) => {
                        return <option value={instance} key={index} >{instances[instance]}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

export default InstanceSelection;