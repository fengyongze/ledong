define(function () {
    return {
        init: {
            arr: [],
            position: [],
            start_time: [],
            endTime: [],
            index: sessionStorage["index"],
            //            jsonstr: '{"arr_ground_site":[]}'
            jsonarray: eval("(" + '{"arr_ground_site":[]}' + ")"),
            id: sessionStorage["ground_id"],
            select_date: 0,
            xingqi: 0,
            sum: 0
        }
    };
});
