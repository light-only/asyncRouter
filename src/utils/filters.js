import dayjs from 'dayjs'

const filterTimes = (val,format='YYYY-MM-DD')=>{
    if(!isNull(val)){
        val = parseInt(val) * 1000;
        return dayjs(val).format(format);
    }else{
        return '--'
    }
}

export const isNull = (data)=>{
    if(!data) return true;
    if(JSON.stringify(data) === '{}') return true;
    if(JSON.stringify(data) === '[]') return true;
}

export default (app)=>{
    app.config.globalProperties.$filters = {
        filterTimes
    }
}