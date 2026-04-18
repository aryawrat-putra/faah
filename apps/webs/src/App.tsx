"use client";

import { useState, useRef } from 'react'
import { Card, CardHeader, CardContent, Chip, Button, Table, ProgressBar, Checkbox, Label } from '@heroui/react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Upload01Icon,
  File01Icon,
  CheckmarkCircle02Icon,
  Cancel01Icon,
  RefreshIcon,
  Download01Icon,
  Delete02Icon,
  File02Icon,
  Clock01Icon,
  Share05Icon,
} from '@hugeicons/core-free-icons'
import DefaultLayout from './layouts/default'

interface FileItem {
  id: string
  name: string
  size: number
  status: 'pending' | 'uploading' | 'uploaded' | 'failed'
  createdAt: Date
}

interface LogEntry {
  id: string
  action: string
  status: 'success' | 'error'
  timestamp: Date
  details?: string
}

export default function FAHDashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'example.pdf',
      size: 2048000,
      status: 'uploaded',
      createdAt: new Date(Date.now() - 3600000),
    },
    {
      id: '2',
      name: 'image.jpg',
      size: 512000,
      status: 'uploading',
      createdAt: new Date(Date.now() - 1800000),
    },
  ])
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      action: 'generate-upload-url',
      status: 'success',
      timestamp: new Date(Date.now() - 300000),
      details: 'URL generated for example.pdf',
    },
    {
      id: '2',
      action: 'upload-complete',
      status: 'success',
      timestamp: new Date(Date.now() - 60000),
      details: 'Successfully completed upload',
    },
  ])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [useChunked, setUseChunked] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      addLog('file-selected', 'success', `Selected: ${file.name}`)
    }
  }

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setSelectedFile(file)
      addLog('file-selected', 'success', `Dropped: ${file.name}`)
    }
  }

  const generateUploadUrl = () => {
    if (!selectedFile) return
    addLog('generate-upload-url', 'success', `Generated URL for ${selectedFile.name}`)
  }

  const uploadFile = () => {
    if (!selectedFile) return

    const newFile: FileItem = {
      id: Math.random().toString(),
      name: selectedFile.name,
      size: selectedFile.size,
      status: 'uploading',
      createdAt: new Date(),
    }

    setFiles((prev) => [newFile, ...prev])
    addLog('upload-start', 'success', `Uploading ${selectedFile.name}`)

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setUploadProgress(0)

        // Mark as uploaded
        setFiles((prev) =>
          prev.map((f) =>
            f.id === newFile.id ? { ...f, status: 'uploaded' } : f
          )
        )
        addLog('upload-complete', 'success', `Successfully uploaded ${selectedFile.name}`)
        setSelectedFile(null)
      } else {
        setUploadProgress(Math.min(progress, 99))
      }
    }, 300)
  }

  const addLog = (action: string, status: 'success' | 'error', details?: string) => {
    const newLog: LogEntry = {
      id: Math.random().toString(),
      action,
      status,
      timestamp: new Date(),
      details,
    }
    setLogs((prev) => [newLog, ...prev].slice(0, 50)) // Keep last 50 logs
  }

  const handleDelete = (id: string) => {
    const file = files.find((f) => f.id === id)
    if (file) {
      setFiles((prev) => prev.filter((f) => f.id !== id))
      addLog('file-deleted', 'success', `Deleted ${file.name}`)
    }
  }

  const handleGetUrl = (id: string) => {
    const file = files.find((f) => f.id === id)
    if (file) {
      addLog('get-url', 'success', `Retrieved URL for ${file.name}`)
    }
  }

  const handleProcess = (id: string) => {
    const file = files.find((f) => f.id === id)
    if (file) {
      addLog('process-file', 'success', `Processing ${file.name}`)
    }
  }

  const handleRefresh = () => {
    addLog('refresh', 'success', 'File list refreshed')
  }

  return (
    <DefaultLayout>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">FAAH Dashboard</h1>
            <p>File As A Hub - Backend API Test Panel</p>
          </div>

          {/* Upload Section */}
          <Card>
            <Card.Header className="flex gap-3 border-b">
              <div className="flex flex-row gap-2 items-center my-2">
                <HugeiconsIcon icon={Upload01Icon} className="w-5 h-5" />
                <p className="text-lg font-semibold">Upload File</p>
              </div>
            </Card.Header>

            <CardContent className="space-y-4">
              {/* Drag & Drop Area */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDragDrop}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors"
              >
                <HugeiconsIcon icon={Upload01Icon} className="w-8 h-8 mx-auto mb-3" />
                <p className="font-medium">
                  Drag & drop or click to select
                </p>
                <p className="text-sm mt-1">
                  Maximum file size: 100MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* Selected File Preview */}
              {selectedFile && (
                <div className="rounded-lg p-4 border">
                  <div className="flex items-start gap-3">
                    <HugeiconsIcon icon={File02Icon} className="w-5 h-5 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">
                        {selectedFile.name}
                      </p>
                      <p className="text-sm">
                        {formatFileSize(selectedFile.size)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Chunked Upload Toggle */}
              <div className="flex items-center gap-3">
                <Checkbox id="chunked" isSelected={useChunked} onChange={setUseChunked} variant='secondary'>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    <Label htmlFor="chunked">Use chunked upload</Label>
                  </Checkbox.Content>
                </Checkbox>
              </div>

              {/* Progress Bar */}
              {uploadProgress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">Upload Progress</p>
                    <p className="text-sm font-medium">{uploadProgress}%</p>
                  </div>
                  <ProgressBar
                    value={uploadProgress}
                    className="max-w-full"
                    color="default"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  isDisabled={!selectedFile}
                  onClick={generateUploadUrl}
                >
                  Generate Upload URL
                </Button>

                <Button
                  isDisabled={!selectedFile}
                  onClick={uploadFile}
                >
                  Upload File
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* File List Section */}
          <Card>
            <Card.Header className="flex gap-3 border-b justify-between items-center">
              <div className="flex gap-3 items-center justify-between w-full">
                <div className="flex flex-row gap-2 items-center my-2">
                  <HugeiconsIcon icon={File01Icon} className="w-5 h-5" />
                  <p className="text-lg font-semibold">Files</p>
                </div>
                <Button
                  isIconOnly
                  variant="ghost"
                  onClick={handleRefresh}
                >
                  <HugeiconsIcon icon={RefreshIcon} className="w-5 h-5" />
                </Button>
              </div>
            </Card.Header>

            <Card.Content>
              {files.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                  <HugeiconsIcon icon={File02Icon} className="w-8 h-8 mr-3" />
                  <p>No files uploaded yet</p>
                </div>
              ) : (
                <Table>
                  <Table.ScrollContainer>
                    <Table.Content aria-label="Files table">

                      <Table.Header>
                        <Table.Column>Name</Table.Column>
                        <Table.Column>Size</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Created</Table.Column>
                        <Table.Column>Actions</Table.Column>
                      </Table.Header>

                      <Table.Body>
                        {files.map((file) => (
                          <Table.Row key={file.id}>

                            <Table.Cell>
                              <div className="flex items-center gap-3 min-w-0">
                                <HugeiconsIcon icon={File01Icon} className="w-4 h-4 flex-shrink-0" />
                                <p className="truncate">{file.name}</p>
                              </div>
                            </Table.Cell>

                            <Table.Cell>
                              {formatFileSize(file.size)}
                            </Table.Cell>

                            <Table.Cell>
                              {file.status === 'uploaded' && <Chip size="sm">Uploaded</Chip>}
                              {file.status === 'uploading' && <Chip size="sm">Uploading</Chip>}
                              {file.status === 'pending' && <Chip size="sm">Pending</Chip>}
                              {file.status === 'failed' && <Chip size="sm">Failed</Chip>}
                            </Table.Cell>

                            <Table.Cell>
                              {formatTime(file.createdAt)}
                            </Table.Cell>

                            <Table.Cell>
                              <div className="flex gap-2">
                                <Button isIconOnly size="sm" variant="ghost" onClick={() => handleGetUrl(file.id)}>
                                  <HugeiconsIcon icon={Download01Icon} className="w-4 h-4" />
                                </Button>

                                <Button isIconOnly size="sm" variant="ghost" onClick={() => handleProcess(file.id)}>
                                  <HugeiconsIcon icon={RefreshIcon} className="w-4 h-4" />
                                </Button>

                                <Button isIconOnly size="sm" variant="ghost" onClick={() => handleDelete(file.id)}>
                                  <HugeiconsIcon icon={Delete02Icon} className="w-4 h-4" />
                                </Button>

                                <Button isIconOnly size="sm" variant="ghost">
                                  {/* <Button isIconOnly size="sm" variant="ghost" onClick={() => hadnleOpenInNewTab(file.id)}> */}
                                  <HugeiconsIcon icon={Share05Icon} className="w-4 h-4" />
                                </Button>
                              </div>
                            </Table.Cell>

                          </Table.Row>
                        ))}
                      </Table.Body>

                    </Table.Content>
                  </Table.ScrollContainer>
                </Table>
              )}
            </Card.Content>
          </Card>

          {/* Logs/Debug Panel */}
          <Card>
            <CardHeader className="flex gap-3 border-b">
              <div className="flex flex-row gap-2 items-center my-2">
                <HugeiconsIcon icon={File02Icon} className="w-5 h-5" />
                <p className="text-lg font-semibold">Logs / API Activity</p>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="font-mono text-sm max-h-64 overflow-y-auto">
                {logs.length === 0 ? (
                  <div className="flex items-center justify-center py-8">
                    <HugeiconsIcon icon={Clock01Icon} className="w-5 h-5 mr-2" />
                    No activity yet
                  </div>
                ) : (
                  logs.map((log) => (
                    <div
                      key={log.id}
                      className="px-4 py-2 border-b transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        {log.status === 'success' ? (
                          <HugeiconsIcon icon={CheckmarkCircle02Icon} className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        ) : (
                          <HugeiconsIcon icon={Cancel01Icon} className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span>
                              [{formatTime(log.timestamp)}]
                            </span>
                            <span className="font-semibold">
                              {log.action}
                            </span>
                            {log.details && (
                              <span>{log.details}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  )
}
