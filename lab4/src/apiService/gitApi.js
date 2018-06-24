
function getApi(url) {
    return fetch(url)
        .then((response) => {
            if(response.status >= 200 && response.status < 400){
                return response.json();
            }
            else throw new Error('FETCH_ERROR')});
}

function urlBuilder(protocol, domain, path, login) {
    return protocol.trim()+'://'+domain.trim()+'/'+path.trim()+'/'+login.trim();
}

function getResponse(login) {
    const url = urlBuilder('https', 'api.github.com', 'users', login);
    return getApi(url);
}

async function getFollowersAndRepos(flwrs_url, repos_url, orgs_url) {
    return ({
        followers: await getApi(flwrs_url),
        repositories: await getApi(repos_url),
        organizations: await getApi(orgs_url)
    })
}

export { getResponse, getFollowersAndRepos }