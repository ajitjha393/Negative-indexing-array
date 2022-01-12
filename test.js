Object.setPrototypeOf(Array.prototype, new Proxy({}, {
   get: (t,p,r) => { 
		i = Number(p)
	    return (!Number.isNaN(i) && i < 0) ? r[i + r.length]: Reflect.get(t,p,r) 
   }
}))