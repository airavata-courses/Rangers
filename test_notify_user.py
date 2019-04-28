import json
import requests 

url = "http://149.165.171.144:30013/notify"
headers = {"Content-Type" : "application/json"}
data = { 
        "recipient" : "rkasture@iu.edu",
        "subject" : "Work Hard",
        "body" : "\nDear Rohan,\n Please work on UI. \n Thanks & Regards,\nRangers"
    
	}
y = json.dumps(data)

response = requests.post(url,y,headers = headers)
assert(response.status_code == 200)


