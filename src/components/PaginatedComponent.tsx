import { Grid, Loader, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { IUserContext } from "src/types";
import { getInfo } from "../util";
import { v4 as uuidv4 } from 'uuid';
import { REQUESTS } from "../types";
import "../styles/pagination.css"

export default function PaginatedComponent({ usercontext }: { usercontext: IUserContext }) {
    const { setCurrPage, currPage, setrepoInfo, repoInfo, pages, repourl } = usercontext;

    function handlePagination(curr: any) {
        setCurrPage(curr);
    }

    useEffect(() => {
        getInfo(
            `${repourl}?page=${currPage}&per_page=6`,
        REQUESTS.GET_REPO_INFO).then(repoinfo => setrepoInfo(repoinfo));
    }, [currPage])

    return (
        <>
        {
            repoInfo ? 
                (repoInfo.length > 0) ?
                <div>
                    <Grid style={{padding: 50}}>
                        {repoInfo.map((repo: any) => (
                            <Grid.Col span={4} key={uuidv4()}>
                                <a href={repo.html_url}>{repo.name}</a>
                                <p>{ repo.description ? `Description: ${repo.description}`: ""}</p>
                                <p>{
                                repo.topics.length > 0 ? (repo.topics.length == 1) ? 
                                        `Tags: ${repo.topics.join("")}` : `Tags: ${repo.topics.join(", ")} `
                                    : ""}
                                </p>
                            </Grid.Col>
                        ))}
                    </Grid>
                    <Pagination className="pagination" page={currPage} onChange={handlePagination} total={pages} />
                </div> 
                : <h2 className="norepo">This user has zero repositories</h2> 
            : <Loader />
        }
        </>
    )
}

