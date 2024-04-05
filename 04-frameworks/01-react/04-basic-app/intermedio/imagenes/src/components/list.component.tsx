import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);
    const [search, setSearch] = React.useState("lemoncode");

    React.useEffect(() => {
        fetch(`https://api.github.com/orgs/lemoncode/members`)
            .then((response) => response.json())
            .then((json) => setMembers(json));
    }, []);

    const handleSearch = () => {
        fetch(`https://api.github.com/orgs/${search}/members`)
            .then((response) => response.json())
            .then((json) => setMembers(json));
    };

    return (
        <>
            <h2>Hello from List page</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            <div className="list-user-list-container">
                <span className="list-header">Avatar</span>
                <span className="list-header">Id</span>
                <span className="list-header">Name</span>
                {members.length > 0 ? (
                    members.map((member) => (
                        <>
                            <img src={member.avatar_url} />
                            <span>{member.id}</span>
                            <Link to={`/detail/${member.login}`}>
                                {member.login}
                            </Link>
                        </>
                    ))
                ) : (
                    <span>No members found</span>
                )}
            </div>
            <Link to="/detail">Navigate to detail page</Link>
        </>
    );
};
