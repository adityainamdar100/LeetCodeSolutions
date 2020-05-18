/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let a = [];
    let n = board.length;
    let cnt = 0;
    for(let i=n-1;i>=0;i--){
        cnt += 1;
        if(cnt%2===1) {
            for(let j=0;j<n;j++) {
                a.push(board[i][j]);
            }
        } else {
            for(let j=n-1;j>=0;j--) {
                a.push(board[i][j]);
            }
        }
    }
    let b = {};
    for(let i=0;i<n*n;i++) {
        b[i] = [];
        for(let j=1;j<=6;j++) {
            if(i+j<n*n) {
                if(a[i+j]===-1) 
                    b[i].push(i+j);
                else {
                    let val = a[i+j];
                    b[i].push(val-1);
                }
            }
        }
    }
    let dist = [];
    for(let i=0;i<n*n;i++) {
        dist.push(-1);
    }
    let q = [];
    let visited = {};
    q.push(0);
    dist[0] = 0;
    let cnt2 = 0;
    while(q.length>0) {
        let ele = q.shift();
        if(visited[ele])
            continue;
        let flag = 0;
        for(let i of b[ele]) {
            if(dist[i]===-1)
                dist[i] = dist[ele]+1;
            q.push(i);
            if(i===n*n-1) {
                flag = 1;
                break;
            }
        }
        visited[ele] = 1;
        if(flag===1) break;
        cnt2 += 1;
    }  
    
    return dist[n*n-1];
};
