export type StateProps = {
    name: string;
    uf: string;
    population: string;
}

export class State{
    
    public name?: string;
    public uf: string;
    public population?: string;

    private constructor(
        props: StateProps
    ){
        Object.assign(this, props)
    }

    static create(props: StateProps){
        const state = new State(props);

        return state;
    }
}