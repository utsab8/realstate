import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Search, Mail, MailOpen, Trash2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ManageMessages = () => {
  const { messages, deleteMessage, markMessageRead } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          msg.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'Unread') return matchesSearch && !msg.read;
    if (filter === 'Read') return matchesSearch && msg.read;
    return matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Messages Inbox</h1>
          <p className="text-sm text-slate-500 mt-1">Manage inquiries from your clients.</p>
        </div>
        <div className="flex bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm">
          {['All', 'Unread', 'Read'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${filter === f ? 'bg-blue-50 text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col h-[calc(100vh-220px)]">
        {/* Toolbar */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/50">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, or subject..."
              className="pl-11 block w-full rounded-xl border border-slate-200 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Message List */}
        <div className="overflow-y-auto flex-1 bg-slate-50 custom-scrollbar">
          <div className="divide-y divide-slate-100">
            <AnimatePresence>
              {filteredMessages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={msg.id} 
                  className={`p-6 transition-all duration-200 group ${msg.read ? 'bg-white hover:bg-slate-50' : 'bg-blue-50/50 hover:bg-blue-50'}`}
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-5">
                    <div className="flex-1 flex gap-5">
                      <div className="mt-1 flex-shrink-0">
                        {msg.read ? (
                          <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                            <MailOpen className="h-5 w-5 text-slate-400" />
                          </div>
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 shadow-sm shadow-blue-500/10">
                            <Mail className="h-5 w-5 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-base font-bold ${msg.read ? 'text-slate-700' : 'text-slate-900'}`}>{msg.name}</span>
                          <span className="text-sm text-slate-500">&lt;{msg.email}&gt;</span>
                        </div>
                        <h4 className={`text-sm mb-2.5 ${msg.read ? 'text-slate-600 font-medium' : 'text-slate-800 font-bold'}`}>{msg.subject}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{msg.message}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start flex-shrink-0 pl-15 sm:pl-0 border-t sm:border-t-0 border-slate-100 pt-4 sm:pt-0">
                      <span className="text-xs text-slate-400 font-medium mb-3">{new Date(msg.date).toLocaleString()}</span>
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!msg.read && (
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => markMessageRead(msg.id)}
                            className="flex items-center px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-green-50 hover:border-green-200 hover:text-green-700 text-xs font-semibold transition-all shadow-sm"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
                            Mark Read
                          </motion.button>
                        )}
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => deleteMessage(msg.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all border border-transparent hover:border-red-100" 
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredMessages.length === 0 && (
              <div className="p-20 text-center flex flex-col items-center justify-center">
                <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center mb-5">
                  <MailOpen className="h-10 w-10 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">No messages found</h3>
                <p className="text-sm text-slate-500 font-medium">You don't have any messages matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ManageMessages;
