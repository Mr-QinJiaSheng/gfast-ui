import request from '@/utils/request'

// 查询定时任务调度列表
export function listJob(query) {
  return request({
    url: '/system/monitor/job/list',
    method: 'get',
    params: query
  })
}

// 查询定时任务调度详细
export function getJob(jobId) {
  return request({
    url: '/system/monitor/job/get?id=' + jobId,
    method: 'get'
  })
}

// 新增定时任务调度
export function addJob(data) {
  return request({
    url: '/system/monitor/job/add',
    method: 'post',
    data: data
  })
}

// 修改定时任务调度
export function updateJob(data) {
  return request({
    url: '/system/monitor/job/edit',
    method: 'put',
    data: data
  })
}

// 删除定时任务调度
export function delJob(jobIds) {
  return request({
    url: '/system/monitor/job/delete',
    method: 'delete',
    params:{ids:jobIds}
  })
}

// 导出定时任务调度
export function exportJob(query) {
  return request({
    url: '/system/monitor/job/export',
    method: 'get',
    params: query
  })
}

// 任务状态修改
export function changeJobStatus(jobId, status) {
  const data = {
    jobId,
    status
  }
  return request({
    url: '/system/monitor/job/changeStatus',
    method: 'put',
    data: data
  })
}


export function start(jobId){
  return request({
    url: '/system/monitor/job/start?id='+jobId,
    method: 'put',
  })
}

export function stop(jobId){
  return request({
    url: '/system/monitor/job/stop?id='+jobId,
    method: 'put',
  })
}



// 定时任务立即执行一次
export function runJob(jobId) {
  return request({
    url: '/system/monitor/job/run?id='+jobId,
    method: 'put',
  })
}
