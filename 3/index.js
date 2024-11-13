// Question 3
// 请实现一个 batch 函数, 来实现一组异步操作的并发
// , 在全部操作完成后, 分别打印成功的操作结果和失败的操作结果

/**
 * @param {(() => Promise<any>)[]} asyncActions
 */
async function batch(asyncActions) {
    const promises=asyncActions.map(action=>action())
    const results=await Promise.allSettled(promises)
    const successes=[]
    const failures=[]
    results.forEach((result,index)=>{
        if(result.status==='fulfilled'){
            successes.push({
                value:result.value,
                index
            })
        }else{
            failures.push({
                reason:result.reason,
                index
            })
        }
    })
    console.log('successful results:', successes);
    console.log('failed results:', failures);
    return {
        successes,
        failures
    }
}
const successPromise=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('success')
        }, 1000);
    })
}
const failPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject('fail')
        }, 2000);
    })
}

batch([successPromise,successPromise,failPromise,successPromise,failPromise]).then(res=>{
    console.log(res);
})
// successful results: [
//     { value: 'success', index: 0 },
//     { value: 'success', index: 1 },
//     { value: 'success', index: 3 }
//   ]
// failed results: [ { reason: 'fail', index: 2 }, { reason: 'fail', index: 4 } ]
// {
//   successes: [
//     { value: 'success', index: 0 },
//     { value: 'success', index: 1 },
//     { value: 'success', index: 3 }
//   ],
//   failures: [ { reason: 'fail', index: 2 }, { reason: 'fail', index: 4 } ]
// }
