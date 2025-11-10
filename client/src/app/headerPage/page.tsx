import TopHomePage from "../../components/topBar"

const mockUserInformations = {
    userName: "Maria Silva",
    numCapibas: 450,
    level: 5,
    sequenceOfdays: 7
};

export default function HeaderPage() {
    return (
        <TopHomePage userInformation={mockUserInformations} />
    )
}

