// Question 1
// 有一组符合 `A-B-C.D` 模式的字符串数组
// , 请实现以 `A > D > C > B` 的权重排序的函数
// , 比较函数分别为 `compareA`, `compareB`, `compareC`, `compareD`
// , 可以用尽可能多的方式实现它

// 提示: 可参考 `Array.prototype.toSorted`, `Array.prototype.sort` 方法

/**
 * @param {string[]} array
 * @param {object} comparators
 * @param {(a1: string, a2: string) => number} comparators.compareA
 * @param {(b1: string, b2: string) => number} comparators.compareB
 * @param {(c1: string, c2: string) => number} comparators.compareC
 * @param {(d1: string, d2: string) => number} comparators.compareD
 * @returns {string[]} outputArray
 */
function sort(array, { compareA, compareB, compareC, compareD }) {
    return array.sort((a,b)=>{
        // 以.区分左右两边
        const [left1,right1]=a.split('.')
        const [left2,right2]=b.split('.')
        const [a1,b1,c1,d1]=[...left1.split('-'),right1]
        const [a2,b2,c2,d2]=[...left2.split('-'),right2]
        let result=compareA(a1,a2)
        if(result!==0) return result;
        result=compareB(b1,b2)
        if(result!==0) return result;
        result=compareC(c1,c2)
        if(result!==0) return result;
        return compareD(d1,d2)
    })
}
// test
const compare={
    compareA:(a,b)=>{ 
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
     },
    compareB:(a,b)=>{ 
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
     },
    compareC:(a,b)=>{ 
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
     },
    compareD:(a,b)=>{ 
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
     },
}

//[ '1-1-1.1', '1-1-1.2', '1-1-2.1', '2-1-1.1' ] 
console.log(sort(['2-1-1.1','1-1-2.1','1-1-1.2','1-1-1.1'],compare));

