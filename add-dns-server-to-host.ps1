param ($cluster_domain_name="multikube", $name_servers="$(minikube ip)")

$cluster_namespace=".$cluster_domain_name"

Write-Host "Domain: '$cluster_namespace', NS: '$name_servers'"

Get-DnsClientNrptRule | Where-Object {$_.Namespace -eq $cluster_namespace} | Remove-DnsClientNrptRule -Force

Add-DnsClientNrptRule -Namespace $cluster_namespace -NameServers $name_servers