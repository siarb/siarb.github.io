# Setting Up K3S in High Availability

<procedure title="Configure Nginx to load balance between the two instances.">
<step>Install Nginx
<code-block lang="bash">
sudo apt install nginx
</code-block>
</step>

<step>
Update the file <code>/etc/nginx/nginx.conf</code> to the following
<code-block lang="nginx">
stream {
  server {
    listen 6443;
    proxy_pass stream_master_nodes;
  }

upstream stream_master_nodes {
server IP_of_Node_1:6443;
server IP_of_Node_2:6443;
}
}
</code-block>
</step>
</procedure>
